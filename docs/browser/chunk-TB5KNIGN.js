import{$ as G,A as w,B as C,C as h,E as R,F as M,G as P,H as j,I as d,J as z,P as p,R as q,T as k,a as I,aa as D,b as L,ba as H,c as T,ca as W,f as E,fa as N,ga as A,h as V,ha as g,i as v,ia as U,j as y,ja as J,la as Q,m as O,ma as B,na as X,p as a,q as S,r as b,s as l,sa as Y,t as F,x as n,y as t,z as u}from"./chunk-4W2TA7YY.js";var x=i=>({"is-invalid":i});function ie(i,s){i&1&&(n(0,"div"),d(1," firstName est obligatoire "),t())}function ne(i,s){if(i&1&&(n(0,"div",15),b(1,ie,2,0,"div",16),t()),i&2){let m=h();a(),l("ngIf",m.f.firstName.errors.required)}}function re(i,s){i&1&&(n(0,"div"),d(1," password est obligatoire "),t())}function oe(i,s){if(i&1&&(n(0,"div",15),b(1,re,2,0,"div",16),t()),i&2){let m=h();a(),l("ngIf",m.f.password.errors.required)}}function ae(i,s){i&1&&(n(0,"div"),d(1," phone est obligatoire "),t())}function se(i,s){if(i&1&&(n(0,"div",15),b(1,ae,2,0,"div",16),t()),i&2){let m=h();a(),l("ngIf",m.f.phone.errors.required)}}var K=(()=>{let s=class s{constructor(e,r){this.formBuilder=e,this.api=r,this.submitted=!1,this.loading_edit_user=!1,this.user_to_edit={},this.cb_edit_user=new O,this.form_details={},this.current_user={},this.loading_get_details_add_user_form=!1}ngOnChanges(e){e.user_to_edit&&(this.current_user=e.user_to_edit.currentValue,this.update_form(this.current_user))}ngOnInit(){this.get_details_add_user_form(),this.current_user=this.user_to_edit,this.update_form(this.current_user)}update_form(e){this.reactiveForm_edit_user=this.formBuilder.group({firstName:[e.firstName,g.required],lastName:[e.lastName,g.required],email:[e.email,g.required],password:[e.password,g.required],phone:[e.phone,g.required],relationship:[e.relationship,g.required],authority_id:[e.authority_id,g.required],status:[e.status,g.required]})}get f(){return this.reactiveForm_edit_user.controls}onSubmit_edit_user(){if(this.submitted=!0,!this.reactiveForm_edit_user.invalid){var e=this.reactiveForm_edit_user.value;console.log(this.user_to_edit.id),this.edit_user({condition:JSON.stringify({id:this.user_to_edit.id}),data:JSON.stringify(e)})}}onReset_edit_user(){this.submitted=!1,this.reactiveForm_edit_user.reset()}edit_user(e){this.loading_edit_user=!0,this.api.taf_post("user/update_user",e,r=>{r.status?(this.cb_edit_user.emit({new_data:JSON.parse(e.data)}),this.api.deconnexion(),console.log("Op\xE9ration effectu\xE9e avec succ\xE9s sur la table user. R\xE9ponse= ",r),this.onReset_edit_user(),alert("Op\xE9ration effectu\xE9e avec succ\xE9s sur la table user")):(console.log("L'op\xE9ration sur la table user a \xE9chou\xE9. R\xE9ponse= ",r),alert("L'op\xE9ration a echou\xE9")),this.loading_edit_user=!1},r=>{this.loading_edit_user=!1})}get_details_add_user_form(){this.loading_get_details_add_user_form=!0,this.api.taf_post("user/get_form_details",{},e=>{e.status?(this.form_details=e.data,console.log("Op\xE9ration effectu\xE9e avec succ\xE9s sur la table user. R\xE9ponse= ",e)):(console.log("L'op\xE9ration sur la table user a \xE9chou\xE9. R\xE9ponse= ",e),alert("L'op\xE9ration a echou\xE9")),this.loading_get_details_add_user_form=!1},e=>{this.loading_get_details_add_user_form=!1})}};s.\u0275fac=function(r){return new(r||s)(S(Y),S(N))},s.\u0275cmp=E({type:s,selectors:[["app-profile"]],inputs:{user_to_edit:"user_to_edit"},outputs:{cb_edit_user:"cb_edit_user"},features:[V],decls:44,vars:27,consts:[["form_edit_user","ngForm"],[1,"row",3,"ngSubmit","formGroup"],["disabled","disabled"],[1,"input-group","mb-3"],["for","disabledTextInput","id","inputGroup-sizing-default",1,"input-group-text"],["type","text","id","disabledTextInput","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","id","disabledTextInput","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","formControlName","lastName",1,"form-control",3,"ngClass"],["type","email","id","disabledTextInput","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","formControlName","email",1,"form-control",3,"ngClass"],["type","text","id","disabledTextInput","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","formControlName","relationship",1,"form-control",3,"ngClass"],["type","text","id","disabledTextInput","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","formControlName","status",1,"form-control",3,"ngClass"],["type","password","formControlName","password","placeholder","password","aria-label","Sizing example input",1,"form-control",3,"ngClass"],["type","tel","formControlName","phone","placeholder","phone","aria-label","Sizing example input",1,"form-control",3,"ngClass"],[1,"text-center","m-2"],["type","button",1,"btn","btn-primary","m-2",3,"click","disabled"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(r,o){if(r&1){let f=w();n(0,"form",1,0),C("ngSubmit",function(){return v(f),y(o.onSubmit_edit_user())}),n(2,"fieldset",2)(3,"div",3)(4,"span",4)(5,"strong"),d(6,"Prenom: "),t()(),u(7,"input",5),b(8,ne,2,1,"div",6),t(),n(9,"div",3)(10,"span",4)(11,"strong"),d(12,"Nom : "),t()(),u(13,"input",7),t(),n(14,"div",3)(15,"span",4)(16,"strong"),d(17,"Email : "),t()(),u(18,"input",8),t(),n(19,"div",3)(20,"span",4)(21,"strong"),d(22,"Relation : "),t()(),u(23,"input",9),t(),n(24,"div",3)(25,"span",4)(26,"strong"),d(27,"Account status : "),t()(),u(28,"input",10),t()(),n(29,"div",3)(30,"span",4)(31,"strong"),d(32,"password"),t()(),u(33,"input",11),b(34,oe,2,1,"div",6),t(),n(35,"div",3)(36,"span",4)(37,"strong"),d(38,"Phone"),t()(),u(39,"input",12),b(40,se,2,1,"div",6),t()(),n(41,"div",13)(42,"button",14),C("click",function(){v(f);let $=j(1);return y($.ngSubmit.emit())}),d(43),t()()}r&2&&(l("formGroup",o.reactiveForm_edit_user),a(7),l("ngClass",p(13,x,o.submitted&&o.f.firstName.errors)),a(),l("ngIf",o.submitted&&o.f.firstName.errors),a(5),l("ngClass",p(15,x,o.submitted&&o.f.lastName.errors)),a(5),l("ngClass",p(17,x,o.submitted&&o.f.email.errors)),a(5),l("ngClass",p(19,x,o.submitted&&o.f.relationship.errors)),a(5),l("ngClass",p(21,x,o.submitted&&o.f.status.errors)),a(5),l("ngClass",p(23,x,o.submitted&&o.f.password.errors)),a(),l("ngIf",o.submitted&&o.f.password.errors),a(5),l("ngClass",p(25,x,o.submitted&&o.f.phone.errors)),a(),l("ngIf",o.submitted&&o.f.phone.errors),a(2),l("disabled",o.loading_edit_user),a(),z(o.loading_edit_user?"En cours ...":"Valider"))},dependencies:[q,k,Q,A,U,J,B,X]});let i=s;return i})();var de=["closeEditUserModal"],_=i=>[i];function ue(i,s){if(i&1&&(n(0,"li",25)(1,"button",26),u(2,"i",27),d(3," Users "),t()(),n(4,"li",25)(5,"button",26),u(6,"i",28),d(7," Doors "),t()(),n(8,"li",25)(9,"button",26),u(10,"i",29),d(11," Motions "),t()(),n(12,"li",25)(13,"button",26),u(14,"i",30),d(15," Water Level "),t()(),n(16,"li",25)(17,"button",26),u(18,"i",31),d(19," Windows "),t()(),n(20,"li",25)(21,"button",26),u(22,"i",32),d(23," Smoke "),t()(),n(24,"li",25)(25,"button",26),u(26,"i",33),d(27," Camera "),t()()),i&2){let m=h();a(),l("routerLink",p(7,_,m.menu.items[2].path)),a(4),l("routerLink",p(9,_,m.menu.items[0].path)),a(4),l("routerLink",p(11,_,m.menu.items[1].path)),a(4),l("routerLink",p(13,_,m.menu.items[3].path)),a(4),l("routerLink",p(15,_,m.menu.items[4].path)),a(4),l("routerLink",p(17,_,m.menu.items[5].path)),a(4),l("routerLink",p(19,_,m.menu.items[6].path))}}function me(i,s){if(i&1&&(n(0,"li",25)(1,"button",26),u(2,"i",28),d(3," Doors "),t()(),n(4,"li",25)(5,"button",26),u(6,"i",29),d(7," Motions "),t()(),n(8,"li",25)(9,"button",26),u(10,"i",30),d(11," Water Level "),t()(),n(12,"li",25)(13,"button",26),u(14,"i",31),d(15," Windows "),t()(),n(16,"li",25)(17,"button",26),u(18,"i",32),d(19," Smoke "),t()(),n(20,"li",25)(21,"button",26),u(22,"i",33),d(23," Camera "),t()()),i&2){let m=h();a(),l("routerLink",p(6,_,m.menu.items[0].path)),a(4),l("routerLink",p(8,_,m.menu.items[1].path)),a(4),l("routerLink",p(10,_,m.menu.items[3].path)),a(4),l("routerLink",p(12,_,m.menu.items[4].path)),a(4),l("routerLink",p(14,_,m.menu.items[5].path)),a(4),l("routerLink",p(16,_,m.menu.items[6].path))}}function pe(i,s){i&1&&(n(0,"h1",21),d(1,"Admin"),t())}function ce(i,s){i&1&&(n(0,"h1",21),d(1,"User"),t())}function _e(i,s){if(i&1){let m=w();n(0,"app-profile",34),C("cb_edit_user",function(r){v(m);let o=h();return y(o.after_edit(r))}),t()}if(i&2){let m=h();l("user_to_edit",m.user_to_edit)}}var xe=(()=>{let s=class s{constructor(e,r){this.api=e,this.route=r,this.menu={titre:"Menu",items:[{libelle:"Doorstatus",path:"/home/doorstatus"},{libelle:"Motionsensors",path:"/home/motionsensors"},{libelle:"User",path:"/home/user"},{libelle:"Waterlevelsensors",path:"/home/waterlevelsensors"},{libelle:"Windowstatus",path:"/home/windowstatus"},{libelle:"SmokeSensors",path:"/home/smokesensors"},{libelle:"Camera",path:"/home/camera"}]},this.authority_id=this.api.token.user_connected.authority_id,this.loading_get_user=!1,this.les_users=[],this.selected_user=void 0,this.user_to_edit=void 0,this.loading_delete_user=!1}onIconClick(){this.route.navigate(["/home"])}get_user(){this.loading_get_user=!0,this.api.taf_post("user/get",{},e=>{e.status?(this.les_users=e.data,console.log("Op\xE9ration effectu\xE9e avec succ\xE9s sur la table user. R\xE9ponse= ",e.data)):(console.log("L'op\xE9ration sur la table user a \xE9chou\xE9. R\xE9ponse= ",e),alert("L'op\xE9ration a echou\xE9")),this.loading_get_user=!1},e=>{this.loading_get_user=!1})}after_add(e){e.status&&(this.les_users.unshift(e.user),this.get_user())}after_edit(e){this.closeEditUserModal.nativeElement.click(),this.les_users[this.les_users.indexOf(this.user_to_edit)]=e.new_data}voir_plus(e){this.selected_user=e}on_click_edit(e){this.user_to_edit=e}on_close_modal_edit(){this.user_to_edit=void 0}delete_user(e){this.loading_delete_user=!0,this.api.taf_post("user/delete",e,r=>{r.status?(console.log("Op\xE9ration effectu\xE9e avec succ\xE9s sur la table user . R\xE9ponse = ",r),alert("Op\xE9ration effectu\xE9e avec succ\xE9s")):(console.log("L'op\xE9ration sur la table user  a \xE9chou\xE9. R\xE9ponse = ",r),alert("L'op\xE9ration a \xE9chou\xE9e")),this.loading_delete_user=!1},r=>{console.log("Erreur inconnue! ",r),this.loading_delete_user=!1})}};s.\u0275fac=function(r){return new(r||s)(S(N),S(D))},s.\u0275cmp=E({type:s,selectors:[["app-home"]],viewQuery:function(r,o){if(r&1&&R(de,5),r&2){let f;M(f=P())&&(o.closeEditUserModal=f.first)}},decls:32,vars:3,consts:[["closeEditUserModal",""],[1,"container-fluid"],[1,"navbar","fixed-top"],[1,"btn","btn-outline-primary",2,"width","100px","height","auto"],["src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSaxxXY9TuP-8kovJxbgudXb52ZpNYBQmNLg&s","alt","",1,"w-100","h-100"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#offcanvasNavbar","aria-controls","offcanvasNavbar","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["tabindex","-1","id","offcanvasNavbar","aria-labelledby","offcanvasNavbarLabel",1,"offcanvas","offcanvas-end",2,"width","max-content"],[1,"offcanvas-header"],["type","button","data-bs-toggle","modal","data-bs-target","#modal_edit_user",1,"btn","btn-outline-primary",2,"width","80%",3,"click"],[1,"bi","bi-person-lines-fill"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close"],[1,"offcanvas-body","d-flex","flex-column"],[1,"navbar-nav","justify-content-end","flex-grow-1","pe-3"],[1,"mt-auto"],["type","button",1,"btn","btn-outline-danger",2,"width","100%",3,"click"],[1,"bi","bi-box-arrow-left"],["id","modal_edit_user","data-bs-backdrop","static",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered","modal-dialog-scrollable"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title","text-center"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[3,"user_to_edit","cb_edit_user",4,"ngIf"],[1,"nav-item"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close","routerLinkActive","bg-primary text-white",1,"btn","btn-outline-primary","m-1",2,"width","100%",3,"routerLink"],[1,"bi","bi-people"],[1,"bi","bi-door-closed"],[1,"bi","bi-person-walking"],[1,"bi","bi-water"],[1,"bi","bi-shop-window"],[1,"bi","bi-fire"],[1,"bi","bi-camera-reels"],[3,"cb_edit_user","user_to_edit"]],template:function(r,o){if(r&1){let f=w();n(0,"div",1)(1,"nav",2)(2,"div",1)(3,"div",3),u(4,"img",4),t(),n(5,"button",5),u(6,"span",6),t(),n(7,"div",7)(8,"div",8)(9,"button",9,0),C("click",function(){return v(f),y(o.on_click_edit(o.api.token.user_connected))}),u(11,"i",10),t(),u(12,"button",11),t(),n(13,"div",12)(14,"ul",13),b(15,ue,28,21)(16,me,24,18),n(17,"div",14)(18,"button",15),C("click",function(){return v(f),y(o.api.deconnexion())}),d(19," Disconnect "),u(20,"i",16),t()()()()()()(),n(21,"div",17)(22,"div",18)(23,"div",19)(24,"div",20),b(25,pe,2,0,"h1",21)(26,ce,2,0),n(27,"button",22),C("click",function(){return v(f),y(o.on_close_modal_edit())}),t()(),n(28,"div",23),b(29,_e,1,1,"app-profile",24),t()()()(),n(30,"div",1),u(31,"router-outlet"),t()()}r&2&&(a(15),F(15,o.authority_id==1?15:16),a(10),F(25,o.api.token.user_connected.authority_id==1?25:26),a(4),l("ngIf",o.user_to_edit))},dependencies:[k,G,H,W,K],styles:['@import"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css";.clickable-icon[_ngcontent-%COMP%]{font-size:3rem;cursor:pointer;transition:color .3s}.clickable-icon[_ngcontent-%COMP%]:hover{color:#007bff}']});let i=s;return i})();var Ee=(()=>{let s=class s{connect(e){return this.subject||(this.subject=this.create(e)),this.subject}create(e){let r=new WebSocket(e),o=new I(c=>(r.onmessage=c.next.bind(c),r.onerror=c.error.bind(c),r.onclose=c.complete.bind(c),()=>{r.close()})),f={next:c=>{r.readyState===WebSocket.OPEN&&r.send(JSON.stringify(c))}};return L.create(f,o)}sendMessage(e){this.subject?this.subject.next(e):console.error("WebSocket connection is not established.")}};s.\u0275fac=function(r){return new(r||s)},s.\u0275prov=T({token:s,factory:s.\u0275fac,providedIn:"root"});let i=s;return i})();export{K as a,xe as b,Ee as c};