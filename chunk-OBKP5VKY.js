import{a as Ce}from"./chunk-7ORCNA7S.js";import{a as Se,b as be}from"./chunk-2UXFLB6D.js";import{a as V}from"./chunk-BEXUWBON.js";import{e as he,f as xe,g as we,h as ve,i as Me,j as Ee,k as Te,l as Pe,n as Ve,o as Ie,p as ke}from"./chunk-7KVBVPRV.js";import{A as ae,B as le,F as de,G as ce,J as se,K as pe,L as me,O as ue,P as ge,S as _e,T as fe,V as ye,w as ie,x as re,y as ne,z as oe}from"./chunk-WNHKCG4Z.js";import{Ha as j,Ka as G,Ma as z,Ra as J,Ta as X,Xa as Y,mb as Z,na as T,nb as $,ra as P,sb as ee,tb as te}from"./chunk-SNNPRX4A.js";import{$a as R,Db as i,Eb as r,Fb as g,Jb as x,Lb as h,Mb as s,Pa as W,Qc as H,Sb as B,Tb as N,Ua as c,Ub as O,Va as M,Wc as A,Xb as L,Yb as d,Yc as Q,Zb as v,a as F,ac as _,bc as f,cc as y,dc as q,ec as w,fb as E,ha as p,ia as m,mb as b,oc as K,qc as U,sc as S,ub as u,xb as D}from"./chunk-EIGNSBGS.js";var Re=["dt"],Be=()=>["name","country.name","representative.name","status"],Ne=()=>({"min-width":"75rem"}),Oe=()=>[10,20,30],We=()=>({width:"450px"});function Le(l,n){if(l&1){let e=x();i(0,"p-button",11),h("onClick",function(){p(e);let t=s();return m(t.openNew())}),r(),i(1,"p-button",12),h("onClick",function(){p(e);let t=s();return m(t.deleteSelectedProducts())}),r()}if(l&2){let e=s();c(),u("disabled",!e.selectedProducts||!e.selectedProducts.length)}}function qe(l,n){if(l&1){let e=x();i(0,"p-button",13),h("onClick",function(){p(e);let t=s();return m(t.exportCSV())}),r()}}function Ke(l,n){if(l&1){let e=x();i(0,"div",14)(1,"h5",15),d(2,"Manage Products"),r(),i(3,"p-iconfield"),g(4,"p-inputicon",16),i(5,"input",17),h("input",function(t){p(e);let a=s(),C=L(6);return m(a.onGlobalFilter(C,t))}),r()()()}}function Ue(l,n){l&1&&(i(0,"tr")(1,"th",18),g(2,"p-tableHeaderCheckbox"),r(),i(3,"th",19),d(4,"Code"),r(),i(5,"th",20),d(6," Name "),g(7,"p-sortIcon",21),r(),i(8,"th"),d(9,"Image"),r(),i(10,"th",22),d(11," Price "),g(12,"p-sortIcon",23),r(),i(13,"th",24),d(14," Category "),g(15,"p-sortIcon",25),r(),i(16,"th",26),d(17," Reviews "),g(18,"p-sortIcon",27),r(),i(19,"th",28),d(20," Status "),g(21,"p-sortIcon",29),r(),g(22,"th",30),r())}function He(l,n){if(l&1){let e=x();i(0,"tr")(1,"td",18),g(2,"p-tableCheckbox",31),r(),i(3,"td",30),d(4),r(),i(5,"td",19),d(6),r(),i(7,"td"),g(8,"img",32),r(),i(9,"td"),d(10),K(11,"currency"),r(),i(12,"td"),d(13),r(),i(14,"td")(15,"p-rating",33),y("ngModelChange",function(t){let a=p(e).$implicit;return f(a.rating,t)||(a.rating=t),m(t)}),r()(),i(16,"td"),g(17,"p-tag",34),r(),i(18,"td")(19,"p-button",35),h("click",function(){let t=p(e).$implicit,a=s();return m(a.editProduct(t))}),r(),i(20,"p-button",36),h("click",function(){let t=p(e).$implicit,a=s();return m(a.deleteProduct(t))}),r()()()}if(l&2){let e=n.$implicit,o=s();c(2),u("value",e),c(2),v(e.code),c(2),v(e.name),c(2),u("src","https://primefaces.org/cdn/primeng/images/demo/product/"+e.image,W)("alt",e.name),c(2),v(U(11,15,e.price,"USD")),c(3),v(e.category),c(2),_("ngModel",e.rating),u("readonly",!0),c(2),u("value",e.inventoryStatus)("severity",o.getSeverity(e.inventoryStatus)),c(2),u("rounded",!0)("outlined",!0),c(),u("rounded",!0)("outlined",!0)}}function Ae(l,n){if(l&1&&g(0,"img",62),l&2){let e=s(2);u("src","https://primefaces.org/cdn/primeng/images/demo/product/"+e.product.image,W)("alt",e.product.image)}}function Qe(l,n){l&1&&(i(0,"small",63),d(1,"Name is required."),r())}function je(l,n){if(l&1){let e=x();i(0,"div",37),b(1,Ae,1,2,"img",38),i(2,"div")(3,"label",39),d(4,"Name"),r(),i(5,"input",40),y("ngModelChange",function(t){p(e);let a=s();return f(a.product.name,t)||(a.product.name=t),m(t)}),r(),b(6,Qe,2,0,"small",41),r(),i(7,"div")(8,"label",42),d(9,"Description"),r(),i(10,"textarea",43),y("ngModelChange",function(t){p(e);let a=s();return f(a.product.description,t)||(a.product.description=t),m(t)}),r()(),i(11,"div")(12,"label",44),d(13,"Inventory Status"),r(),i(14,"p-select",45),y("ngModelChange",function(t){p(e);let a=s();return f(a.product.inventoryStatus,t)||(a.product.inventoryStatus=t),m(t)}),r()(),i(15,"div")(16,"span",46),d(17,"Category"),r(),i(18,"div",47)(19,"div",48)(20,"p-radiobutton",49),y("ngModelChange",function(t){p(e);let a=s();return f(a.product.category,t)||(a.product.category=t),m(t)}),r(),i(21,"label",50),d(22,"Accessories"),r()(),i(23,"div",48)(24,"p-radiobutton",51),y("ngModelChange",function(t){p(e);let a=s();return f(a.product.category,t)||(a.product.category=t),m(t)}),r(),i(25,"label",52),d(26,"Clothing"),r()(),i(27,"div",48)(28,"p-radiobutton",53),y("ngModelChange",function(t){p(e);let a=s();return f(a.product.category,t)||(a.product.category=t),m(t)}),r(),i(29,"label",54),d(30,"Electronics"),r()(),i(31,"div",48)(32,"p-radiobutton",55),y("ngModelChange",function(t){p(e);let a=s();return f(a.product.category,t)||(a.product.category=t),m(t)}),r(),i(33,"label",56),d(34,"Fitness"),r()()()(),i(35,"div",47)(36,"div",57)(37,"label",58),d(38,"Price"),r(),i(39,"p-inputnumber",59),y("ngModelChange",function(t){p(e);let a=s();return f(a.product.price,t)||(a.product.price=t),m(t)}),r()(),i(40,"div",57)(41,"label",60),d(42,"Quantity"),r(),i(43,"p-inputnumber",61),y("ngModelChange",function(t){p(e);let a=s();return f(a.product.quantity,t)||(a.product.quantity=t),m(t)}),r()()()()}if(l&2){let e=s();c(),u("ngIf",e.product.image),c(4),_("ngModel",e.product.name),c(),u("ngIf",e.submitted&&!e.product.name),c(4),_("ngModel",e.product.description),c(4),_("ngModel",e.product.inventoryStatus),u("options",e.statuses),c(6),_("ngModel",e.product.category),c(4),_("ngModel",e.product.category),c(4),_("ngModel",e.product.category),c(4),_("ngModel",e.product.category),c(7),_("ngModel",e.product.price),c(4),_("ngModel",e.product.quantity)}}function Ge(l,n){if(l&1){let e=x();i(0,"p-button",64),h("click",function(){p(e);let t=s();return m(t.hideDialog())}),r(),i(1,"p-button",65),h("click",function(){p(e);let t=s();return m(t.saveProduct())}),r()}}var I=class l{constructor(n,e,o){this.productService=n;this.messageService=e;this.confirmationService=o}productDialog=!1;products=R([]);product;selectedProducts;submitted=!1;statuses;dt;exportColumns;cols;exportCSV(){this.dt.exportCSV()}ngOnInit(){this.loadDemoData()}loadDemoData(){this.productService.getProducts().then(n=>{this.products.set(n)}),this.statuses=[{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}],this.cols=[{field:"code",header:"Code",customExportHeader:"Product Code"},{field:"name",header:"Name"},{field:"image",header:"Image"},{field:"price",header:"Price"},{field:"category",header:"Category"}],this.exportColumns=this.cols.map(n=>({title:n.header,dataKey:n.field}))}onGlobalFilter(n,e){n.filterGlobal(e.target.value,"contains")}openNew(){this.product={},this.submitted=!1,this.productDialog=!0}editProduct(n){this.product=F({},n),this.productDialog=!0}deleteSelectedProducts(){this.confirmationService.confirm({message:"Are you sure you want to delete the selected products?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.products.set(this.products().filter(n=>!this.selectedProducts?.includes(n))),this.selectedProducts=null,this.messageService.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}})}hideDialog(){this.productDialog=!1,this.submitted=!1}deleteProduct(n){this.confirmationService.confirm({message:"Are you sure you want to delete "+n.name+"?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.products.set(this.products().filter(e=>e.id!==n.id)),this.product={},this.messageService.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})}})}findIndexById(n){let e=-1;for(let o=0;o<this.products().length;o++)if(this.products()[o].id===n){e=o;break}return e}createId(){let n="";for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<5;o++)n+=e.charAt(Math.floor(Math.random()*e.length));return n}getSeverity(n){switch(n){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return"info"}}saveProduct(){this.submitted=!0;let n=this.products();this.product.name?.trim()&&(this.product.id?(n[this.findIndexById(this.product.id)]=this.product,this.products.set([...n]),this.messageService.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(this.product.id=this.createId(),this.product.image="product-placeholder.svg",this.messageService.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3}),this.products.set([...n,this.product])),this.productDialog=!1,this.product={})}static \u0275fac=function(e){return new(e||l)(M(V),M(P),M(T))};static \u0275cmp=E({type:l,selectors:[["app-crud"]],viewQuery:function(e,o){if(e&1&&B(Re,5),e&2){let t;N(t=O())&&(o.dt=t.first)}},features:[q([P,V,T])],decls:19,vars:21,consts:[["start",""],["end",""],["dt",""],["caption",""],["header",""],["body",""],["content",""],["footer",""],["styleClass","mb-6"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} products",3,"selectionChange","value","rows","columns","paginator","globalFilterFields","tableStyle","selection","rowHover","showCurrentPageReport","rowsPerPageOptions"],["header","Product Details",3,"visibleChange","visible","modal"],["label","New","icon","pi pi-plus","severity","secondary",1,"mr-2",3,"onClick"],["severity","secondary","label","Delete","icon","pi pi-trash","outlined","",3,"onClick","disabled"],["label","Export","icon","pi pi-upload","severity","secondary",3,"onClick"],[1,"flex","items-center","justify-between"],[1,"m-0"],["styleClass","pi pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],[2,"width","3rem"],[2,"min-width","16rem"],["pSortableColumn","name",2,"min-width","16rem"],["field","name"],["pSortableColumn","price",2,"min-width","8rem"],["field","price"],["pSortableColumn","category",2,"min-width","10rem"],["field","category"],["pSortableColumn","rating",2,"min-width","12rem"],["field","rating"],["pSortableColumn","inventoryStatus",2,"min-width","12rem"],["field","inventoryStatus"],[2,"min-width","12rem"],[3,"value"],[1,"rounded",2,"width","64px",3,"src","alt"],[3,"ngModelChange","ngModel","readonly"],[3,"value","severity"],["icon","pi pi-pencil",1,"mr-2",3,"click","rounded","outlined"],["icon","pi pi-trash","severity","danger",3,"click","rounded","outlined"],[1,"flex","flex-col","gap-6"],["class","block m-auto pb-4",3,"src","alt",4,"ngIf"],["for","name",1,"block","font-bold","mb-3"],["type","text","pInputText","","id","name","required","","autofocus","","fluid","",3,"ngModelChange","ngModel"],["class","text-red-500",4,"ngIf"],["for","description",1,"block","font-bold","mb-3"],["id","description","pTextarea","","required","","rows","3","cols","20","fluid","",3,"ngModelChange","ngModel"],["for","inventoryStatus",1,"block","font-bold","mb-3"],["inputId","inventoryStatus","optionLabel","label","optionValue","label","placeholder","Select a Status","fluid","",3,"ngModelChange","ngModel","options"],[1,"block","font-bold","mb-4"],[1,"grid","grid-cols-12","gap-4"],[1,"flex","items-center","gap-2","col-span-6"],["id","category1","name","category","value","Accessories",3,"ngModelChange","ngModel"],["for","category1"],["id","category2","name","category","value","Clothing",3,"ngModelChange","ngModel"],["for","category2"],["id","category3","name","category","value","Electronics",3,"ngModelChange","ngModel"],["for","category3"],["id","category4","name","category","value","Fitness",3,"ngModelChange","ngModel"],["for","category4"],[1,"col-span-6"],["for","price",1,"block","font-bold","mb-3"],["id","price","mode","currency","currency","USD","locale","en-US","fluid","",3,"ngModelChange","ngModel"],["for","quantity",1,"block","font-bold","mb-3"],["id","quantity","fluid","",3,"ngModelChange","ngModel"],[1,"block","m-auto","pb-4",3,"src","alt"],[1,"text-red-500"],["label","Cancel","icon","pi pi-times","text","",3,"click"],["label","Save","icon","pi pi-check",3,"click"]],template:function(e,o){if(e&1){let t=x();i(0,"p-toolbar",8),b(1,Le,2,1,"ng-template",null,0,S)(3,qe,1,0,"ng-template",null,1,S),r(),i(5,"p-table",9,2),y("selectionChange",function(C){return p(t),f(o.selectedProducts,C)||(o.selectedProducts=C),m(C)}),b(7,Ke,6,0,"ng-template",null,3,S)(9,Ue,23,0,"ng-template",null,4,S)(11,He,21,18,"ng-template",null,5,S),r(),i(13,"p-dialog",10),y("visibleChange",function(C){return p(t),f(o.productDialog,C)||(o.productDialog=C),m(C)}),b(14,je,44,12,"ng-template",null,6,S)(16,Ge,2,0,"ng-template",null,7,S),r(),g(18,"p-confirmdialog")}e&2&&(c(5),u("value",o.products())("rows",10)("columns",o.cols)("paginator",!0)("globalFilterFields",w(16,Be))("tableStyle",w(17,Ne)),_("selection",o.selectedProducts),u("rowHover",!0)("showCurrentPageReport",!0)("rowsPerPageOptions",w(18,Oe)),c(8),D(w(19,We)),_("visible",o.productDialog),u("modal",!0),c(5),D(w(20,We)))},dependencies:[Q,H,A,ye,me,ue,ge,_e,fe,X,j,G,J,z,$,Z,Y,Ve,ke,Ie,ve,we,te,ee,Pe,Te,ce,de,pe,se,re,ie,xe,he,Ee,Me,le,ae,oe,ne,be,Se],encapsulation:2})};var k=class l{static \u0275fac=function(e){return new(e||l)};static \u0275cmp=E({type:l,selectors:[["app-empty"]],decls:5,vars:0,consts:[[1,"card"],[1,"font-semibold","text-xl","mb-4"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"div",1),d(2,"Empty Page"),r(),i(3,"p"),d(4,"Use this page to start from scratch and place your custom content."),r()())},encapsulation:2})};var At=[{path:"documentation",component:Ce},{path:"crud",component:I},{path:"empty",component:k},{path:"**",redirectTo:"/notfound"}];export{At as default};
