"use strict";(self.webpackChunkproduccion_app=self.webpackChunkproduccion_app||[]).push([[416],{416:(B,Z,l)=>{l.r(Z),l.d(Z,{AuthModule:()=>D});var p=l(8583),C=l(8259),s=l.n(C),e=l(7716),g=l(7556),c=l(9171);let b=(()=>{class t{constructor(o,r){this.auth=o,this.router=r}ngOnInit(){}SenMsg(){s().fire({icon:"info",allowOutsideClick:!1,text:"Espere por favor..."}),s().showLoading(),this.supertoks=localStorage.getItem("token"),this.auth.enviarCorreo(this.supertoks).subscribe(o=>{s().fire({showConfirmButton:!1,focusConfirm:!1,icon:"success",text:"Correo Enviado...",timer:1e3}),this.router.navigateByUrl("auth/login")},o=>{s().fire({icon:"error",title:"Error al Enviar el correo",text:"Error"})})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(g.e),e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-verificar-email"]],decls:16,vars:0,consts:[[1,"limiter"],[1,"container-login100"],[1,"wrap-login100"],[1,"login100-form","validate-form"],[1,"login100-form-title"],[1,"container-login100-form-btn"],[1,"login100-form-btn","btn-primary",3,"click"],[1,"text-center","p-t-12"],[1,"txt1"],["href","/auth/login",1,"txt2"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"span",4),e._uU(5," Enviar Correo de verificacion "),e.qZA(),e.TgZ(6,"p"),e._uU(7,"As click en el boton para enviarte un correo electronico de Verificacion"),e.qZA(),e.TgZ(8,"div",5),e.TgZ(9,"button",6),e.NdJ("click",function(){return r.SenMsg()}),e._uU(10," Enviar Correo "),e.qZA(),e.qZA(),e.TgZ(11,"div",7),e.TgZ(12,"span",8),e._uU(13," Regresar al "),e.qZA(),e.TgZ(14,"a",9),e._uU(15," login? "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA())},styles:["button[_ngcontent-%COMP%]{background:#57b846}label[_ngcontent-%COMP%]{font-weight:lighter;position:center}.container-login100[_ngcontent-%COMP%]{width:100%;min-height:70vh}p[_ngcontent-%COMP%]{text-align:justify}"]}),t})();var i=l(3679),A=l(7039);let q=(()=>{class t{constructor(o,r,n,u){this.fb=o,this.rendSer=r,this.router=n,this.auth=u,this.tipoUsu=new e.vpe,this.recuerdo=!1,this.usu={usuario:"",password:"",recuerdame:!1},this.crearFormulog()}crearFormulog(){this.formulog=this.fb.group({usuario:[,[i.kI.required]],password:[,[i.kI.required]],recuerdame:[!1,[i.kI.required]]})}guardarlog(){if(this.formulog.invalid)return void this.formulog.markAllAsTouched();s().fire({icon:"info",allowOutsideClick:!1,text:"Espere por favor..."}),s().showLoading();const{usuario:o,password:r}=this.formulog.value;o.toString().length>7?this.auth.login(o,r).subscribe(n=>{this.getVerificar(n.idToken,o)},n=>{s().fire({icon:"error",title:"Error al Autentificar",text:n.error.error.message,timer:1e3})}):this.auth.loginUsDep(o,r).subscribe(n=>{0==n?(this.formulog.reset(),s().fire({icon:"error",text:"Usuario no encontrado",confirmButtonColor:"#4ED224",timer:1e3})):this.auth.AuthUssDep(o).subscribe(u=>{s().fire({icon:"success",text:"Exitoso...",confirmButtonColor:"#4ED224",timer:1500}),this.getDatosDepUs(o)},u=>{this.formulog.reset(),s().fire({icon:"error",title:"Error al Autentificar",text:u.error.error.message,confirmButtonColor:"#4ED224",timer:1e3})})},n=>{s().fire({icon:"error",text:"Error al Autentificar",timer:1e3})})}getVerificar(o,r){return this.auth.VerificationUser(o).subscribe(n=>(this.emailV=n.users[0].emailVerified,0==this.emailV?(s().fire({icon:"warning",text:"Usuario no verificado...",confirmButtonColor:"#4ED224",timer:1500}),this.formulog.reset(),this.router.navigateByUrl("auth/verificarEmail")):(s().fire({icon:"success",text:"Exitoso...",timer:1500}),this.getDatosUs(r)),n),n=>{console.log("Error de  Verificacion")}),this.emailV}getDatosUs(o){return this.auth.getDatosUsuarios(o).subscribe(r=>{this.formulog.reset(),localStorage.setItem("idFire",r[0].idFire),localStorage.setItem("tipoUsuario",r[0].tipoUsuario),this.rendSer.cargarmenu(),this.tipoUsu.emit(r[0].tipoUsuario),r[0].listaAcopio&&localStorage.setItem("listaAcopio",r[0].listaAcopio),localStorage.setItem("email",r[0].email),this.router.navigateByUrl("Productor"==r[0].tipoUsuario?"productor/inicio":"Acopiador"==r[0].tipoUsuario?"acopiador/inicio":"encargado-planta/inicio")},r=>{s().fire({icon:"error",title:"Error...!",text:"Error al obtener datos",confirmButtonColor:"#4ED224",timer:1e3})}),!0}getDatosDepUs(o){return this.auth.getDatosDepUss(o).subscribe(r=>{this.formulog.reset(),localStorage.setItem("idFire",r[0].idFire),localStorage.setItem("tipoUsuario",r[0].tipoUsuario),localStorage.setItem("emailDep",r[0].dependencia),localStorage.setItem("listaAcopio",r[0].listaAcopio),localStorage.setItem("usuario",o),localStorage.removeItem("email"),this.rendSer.cargarmenu(),this.router.navigateByUrl("productor/inicio")},r=>{s().fire({icon:"error",title:"Error...!",text:"Error al obtener datos",confirmButtonColor:"#4ED224",timer:1e3})}),!0}ngOnInit(){this.VerificarEm()}ngDoCheck(){this.recuerdo=this.formulog.getRawValue().recuerdame}VerificarEm(){localStorage.getItem("email")&&(this.supertoks=localStorage.getItem("email"),this.usu.usuario=this.supertoks,this.formulog.setValue(this.usu))}campoEsValido(o){return this.formulog.controls[o].errors&&this.formulog.controls[o].touched}get ErrorMsg(){var o,r;const n=null===(o=this.formulog.get("usuario"))||void 0===o?void 0:o.errors;if(null==n?void 0:n.required)return"Campos obligatorios.";const u=null===(r=this.formulog.get("password"))||void 0===r?void 0:r.errors;return(null==u?void 0:u.required)?"Campos obligatorios.":""}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(i.qu),e.Y36(A.p),e.Y36(c.F0),e.Y36(g.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],outputs:{tipoUsu:"tipoUsu"},decls:33,vars:1,consts:[[1,"limiter"],[1,"container-login100"],[1,"wrap-login100"],[1,"login100-form","validate-form",3,"formGroup","ngSubmit"],[1,"login100-form-title"],["data-validate","Valid email is required: ex@abc.xyz",1,"wrap-input100","validate-input"],["type","text","formControlName","usuario","name","usuario","placeholder","Correo Electronico",1,"input100"],[1,"focus-input100"],[1,"symbol-input100"],["aria-hidden","true",1,"fas","fa-user"],["data-validate","Password is required",1,"wrap-input100","validate-input"],["type","password","formControlName","password","name","pass","placeholder","Contrase\xf1a",1,"input100"],["aria-hidden","true",1,"fas","fa-lock"],[1,"flex-sb-m","w-full","p-t-3","p-b-24"],[1,"contact100-form-checkbox"],["formControlName","recuerdame","value","false","id","ckb1","type","checkbox","name","remember-me",1,"input-checkbox100"],["for","ckb1",1,"label-checkbox100"],[1,"container-login100-form-btn"],[1,"login100-form-btn","btn-primary"],[1,"text-center","p-t-12"],[1,"txt1"],["href","/auth/recuperarPass",1,"txt2"],[1,"text-center","p-t-136"],["routerLink","/auth/registro","href","#",1,"txt2"],["aria-hidden","true",1,"fa","fa-long-arrow-right","m-l-5"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"form",3),e.NdJ("ngSubmit",function(){return r.guardarlog()}),e.TgZ(4,"span",4),e._uU(5," Bienvenido "),e.qZA(),e.TgZ(6,"div",5),e._UZ(7,"input",6),e._UZ(8,"span",7),e.TgZ(9,"span",8),e._UZ(10,"i",9),e.qZA(),e.qZA(),e.TgZ(11,"div",10),e._UZ(12,"input",11),e._UZ(13,"span",7),e.TgZ(14,"span",8),e._UZ(15,"i",12),e.qZA(),e.qZA(),e.TgZ(16,"div",13),e.TgZ(17,"div",14),e._UZ(18,"input",15),e.TgZ(19,"label",16),e._uU(20," Recordar mi usuario "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div",17),e.TgZ(22,"button",18),e._uU(23," Ingresar "),e.qZA(),e.qZA(),e.TgZ(24,"div",19),e.TgZ(25,"span",20),e._uU(26," Olvidaste "),e.qZA(),e.TgZ(27,"a",21),e._uU(28," tu Contrase\xf1a? "),e.qZA(),e.qZA(),e.TgZ(29,"div",22),e.TgZ(30,"a",23),e._uU(31," \xbfNo tienes cuenta? "),e._UZ(32,"i",24),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(3),e.Q6J("formGroup",r.formulog))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,i.Wl,c.yS],styles:["button[_ngcontent-%COMP%]{background:#57b846}label[_ngcontent-%COMP%]{font-weight:lighter}"]}),t})();var x=l(8164),_=l(7066),T=l(3927),U=l(1918),w=l(5717);function M(t,a){if(1&t&&(e.TgZ(0,"span",35),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.nombreErrorMsg)}}function E(t,a){if(1&t&&(e.TgZ(0,"span",35),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.apellidoErrorMsg)}}function P(t,a){if(1&t&&(e.TgZ(0,"span",35),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.ciErrorMsg)}}function O(t,a){if(1&t&&(e.TgZ(0,"span",35),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.emailErrorMsg)}}function y(t,a){if(1&t&&(e.TgZ(0,"span",35),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.direccionErrorMsg)}}function I(t,a){if(1&t&&(e.TgZ(0,"span",35),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.ekj("is-invalid",o.campoEsValido("usuario")),e.xp6(1),e.Oqu(o.usuarioErrorMsg)}}function k(t,a){if(1&t&&(e.TgZ(0,"span",35),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.passwordErrorMsg)}}function V(t,a){1&t&&(e.TgZ(0,"span",35),e._uU(1,"La contrase\xf1a debe ser igual"),e.qZA())}function S(t,a){if(1&t&&(e.TgZ(0,"span",35),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.tipoUsuarioErrorMsg)}}function F(t,a){if(1&t&&(e.TgZ(0,"span",16),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.emailErrorMsg)}}const N=[{path:"",children:[{path:"login",component:q},{path:"registro",component:(()=>{class t{constructor(o,r,n,u,d,m,f){this.fb=o,this.vs=r,this.router=n,this.crud=u,this.auth=d,this.usuValid=m,this.usuAgValid=f,this.usuario=new x.g,this.crearFormulario()}ngOnInit(){this.usuario=new x.g}crearFormulario(){this.formul=this.fb.group({nombre:[,[i.kI.required,i.kI.minLength(4)]],apellido:[,[i.kI.required,i.kI.minLength(4)]],ci:[,[i.kI.required,i.kI.minLength(7),i.kI.maxLength(11)]],email:[,[i.kI.required,i.kI.pattern(this.vs.emailPatt)]],direccion:[,[i.kI.required,i.kI.minLength(4)]],usuario:[,[i.kI.required,i.kI.minLength(3),i.kI.maxLength(7),i.kI.pattern(this.vs.usuariodPatt)],[this.usuValid,this.usuAgValid]],password:[,[i.kI.required,i.kI.minLength(6),i.kI.pattern(this.vs.passwordPatt)]],passwordRepet:[,i.kI.required],tipoUsuario:[,[i.kI.required]]},{validators:[this.vs.camposIguales("password","passwordRepet")]})}guardar(){if(this.formul.invalid)return void this.formul.markAllAsTouched();s().fire({icon:"info",allowOutsideClick:!1,text:"Espere por favor..."}),s().showLoading();const{nombre:o,apellido:r,ci:n,email:u,direccion:d,usuario:m,password:f,tipoUsuario:J}=this.formul.value;this.crud.agregarUs(o,r,n,u,d,m,J).subscribe(h=>(this.auth.nuevoUsuarioRegAuth(u,f).subscribe(v=>{s().fire({showConfirmButton:!1,focusConfirm:!1,icon:"success",text:"Registro Exitoso...",timer:1e3}),this.getVerificar(v.idToken)},v=>{s().fire({icon:"error",title:"Error al Autentificar",text:v.error.error.message,showCloseButton:!0})}),h),h=>{s().fire({icon:"error",title:"Error al Autentificar",text:h,showCloseButton:!0})})}getVerificar(o){return this.auth.VerificationUser(o).subscribe(r=>(this.emailV=r.users[0].emailVerified,0==this.emailV?(this.formul.reset(),this.router.navigateByUrl("auth/verificarEmail")):(this.emailV=!1,this.router.navigateByUrl("productor/inicio")),r),r=>{console.log("Error Verificar")}),this.emailV}campoEsValido(o){return this.formul.controls[o].errors&&this.formul.controls[o].touched}get nombreErrorMsg(){var o;const r=null===(o=this.formul.get("nombre"))||void 0===o?void 0:o.errors;return(null==r?void 0:r.required)?"Nombre obligatorio.":(null==r?void 0:r.minlength)?"Debe tener mas de 4 caracteres.":""}get apellidoErrorMsg(){var o;const r=null===(o=this.formul.get("apellido"))||void 0===o?void 0:o.errors;return(null==r?void 0:r.required)?"Apellido obligatorio.":(null==r?void 0:r.minlength)?"Debe tener mas de 4 caracteres.":""}get ciErrorMsg(){var o;const r=null===(o=this.formul.get("ci"))||void 0===o?void 0:o.errors;return(null==r?void 0:r.required)?"Ci obligatorio.":(null==r?void 0:r.minlength)?"Debe ser mayor a 7 caracteres.":(null==r?void 0:r.maxlength)?"Debe ser menor a 11 caracteres.":""}get emailErrorMsg(){var o;const r=null===(o=this.formul.get("email"))||void 0===o?void 0:o.errors;return(null==r?void 0:r.required)?"Correo Electronico obligatorio.":(null==r?void 0:r.pattern)?"Formato de Correo Incorrecto.":""}get direccionErrorMsg(){var o;const r=null===(o=this.formul.get("direccion"))||void 0===o?void 0:o.errors;return(null==r?void 0:r.required)?"Direccion obligatoria.":(null==r?void 0:r.minlength)?"Debe tener mas de 4 caracteres.":""}get usuarioErrorMsg(){var o;const r=null===(o=this.formul.get("usuario"))||void 0===o?void 0:o.errors;return(null==r?void 0:r.required)?"Usuario obligatorio.":(null==r?void 0:r.minlength)?"Debe tener mas de 3 caracteres.":(null==r?void 0:r.maxlength)?"Debe tener menos de 7 caracteres.":(null==r?void 0:r.pattern)?"Valido solamente letras y numeros":(null==r?void 0:r.usuTomado)?"Usuario ya Existente":""}get passwordErrorMsg(){var o;const r=null===(o=this.formul.get("password"))||void 0===o?void 0:o.errors;return(null==r?void 0:r.required)?"Contrase\xf1a obligatoria.":(null==r?void 0:r.minlength)?"Debe tener mas de 6 caracteres.":(null==r?void 0:r.pattern)?"Alternar Mayusculas y Minusculas.":""}get tipoUsuarioErrorMsg(){var o;const r=null===(o=this.formul.get("tipoUsuario"))||void 0===o?void 0:o.errors;return(null==r?void 0:r.required)?"Tipo Usuario obligatorio.":""}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(i.qu),e.Y36(_.o),e.Y36(c.F0),e.Y36(T.I),e.Y36(g.e),e.Y36(U.u),e.Y36(w.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-registro"]],decls:71,vars:11,consts:[[1,"limiter"],[1,"container-login100"],[1,"wrap-login100","p-t-50","p-b-90"],[3,"formGroup","ngSubmit"],[1,"login100-form-title"],[1,"form-row"],[1,"form-group","col-md-6"],["for","inputnombre"],["class","text-danger formSpam",4,"ngIf"],["type","text","name","nombre","formControlName","nombre","id","inputNom",1,"form-control"],["for","inputApp"],["type","text","name","apellido","formControlName","apellido","id","inputApp",1,"form-control"],["for","inputCi"],["type","text","name","ci","formControlName","ci","id","inputCi",1,"form-control"],["for","inputEmail4"],["type","email","name","email","formControlName","email","id","inputEmail4",1,"form-control"],[1,"form-group"],["for","inputAddress"],["type","text","name","direccion","formControlName","direccion","id","inputAddress",1,"form-control"],["for","inputUs"],["class","text-danger formSpam",3,"is-invalid",4,"ngIf"],["type","text","name","usuario","formControlName","usuario","id","inputUs",1,"form-control"],["for","inputPASS"],["type","password","name","password","formControlName","password","data-validate","Password is required","id","inputPass",1,"form-control"],["for","inputCity"],["type","password","required","","formControlName","passwordRepet","name","passwordRepet","id","inputPassRepet",1,"form-control"],[1,"form-group","col-md-6","rs-select2","js-select-simple","select--no-search"],["for","inputState"],["id","inputState","name","tipoUsuario","formControlName","tipoUsuario",1,"form-control"],["disabled","disabled","selected","selected"],[1,"select-dropdown"],["type","submit",1,"login100-form-btn","btn-primary",3,"disabled"],[1,"text-center","p-t-12"],[1,"txt1"],["href","/auth/login",1,"txt2"],[1,"text-danger","formSpam"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"form",3),e.NdJ("ngSubmit",function(){return r.guardar()}),e.TgZ(4,"span",4),e._uU(5," Registro de Usuarios "),e.qZA(),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e.TgZ(8,"label",7),e._uU(9,"Nombres:"),e.qZA(),e.YNc(10,M,2,1,"span",8),e._UZ(11,"input",9),e.qZA(),e.TgZ(12,"div",6),e.TgZ(13,"label",10),e._uU(14,"Apellidos:"),e.qZA(),e.YNc(15,E,2,1,"span",8),e._UZ(16,"input",11),e.qZA(),e.qZA(),e.TgZ(17,"div",5),e.TgZ(18,"div",6),e.TgZ(19,"label",12),e._uU(20,"Carnet de identidad"),e.qZA(),e.YNc(21,P,2,1,"span",8),e._UZ(22,"input",13),e.qZA(),e.TgZ(23,"div",6),e.TgZ(24,"label",14),e._uU(25,"Correo Electronico"),e.qZA(),e.YNc(26,O,2,1,"span",8),e._UZ(27,"input",15),e.qZA(),e.qZA(),e.TgZ(28,"div",16),e.TgZ(29,"label",17),e._uU(30,"Direccion"),e.qZA(),e.YNc(31,y,2,1,"span",8),e._UZ(32,"input",18),e.qZA(),e.TgZ(33,"div",5),e.TgZ(34,"div",6),e.TgZ(35,"label",19),e._uU(36,"Usuario"),e.qZA(),e.YNc(37,I,2,3,"span",20),e._UZ(38,"input",21),e.qZA(),e.TgZ(39,"div",6),e.TgZ(40,"label",22),e._uU(41,"Contrase\xf1a"),e.qZA(),e.YNc(42,k,2,1,"span",8),e._UZ(43,"input",23),e.qZA(),e.qZA(),e.TgZ(44,"div",5),e.TgZ(45,"div",6),e.TgZ(46,"label",24),e._uU(47,"Repetir Contrase\xf1a"),e.qZA(),e.YNc(48,V,2,0,"span",8),e._UZ(49,"input",25),e.qZA(),e.TgZ(50,"div",26),e.TgZ(51,"label",27),e._uU(52,"Tipo Usuario"),e.qZA(),e.YNc(53,S,2,1,"span",8),e.TgZ(54,"select",28),e.TgZ(55,"option",29),e._uU(56,"Elige una opci\xf3n "),e.qZA(),e.TgZ(57,"option"),e._uU(58,"Productor"),e.qZA(),e.TgZ(59,"option"),e._uU(60,"Acopiador"),e.qZA(),e.TgZ(61,"option"),e._uU(62,"Encargado Planta"),e.qZA(),e.qZA(),e._UZ(63,"div",30),e.qZA(),e.qZA(),e.TgZ(64,"button",31),e._uU(65," Registrarse "),e.qZA(),e.TgZ(66,"div",32),e.TgZ(67,"span",33),e._uU(68," Regresar al "),e.qZA(),e.TgZ(69,"a",34),e._uU(70," login? "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(3),e.Q6J("formGroup",r.formul),e.xp6(7),e.Q6J("ngIf",r.campoEsValido("nombre")),e.xp6(5),e.Q6J("ngIf",r.campoEsValido("apellido")),e.xp6(6),e.Q6J("ngIf",r.campoEsValido("ci")),e.xp6(5),e.Q6J("ngIf",r.campoEsValido("email")),e.xp6(5),e.Q6J("ngIf",r.campoEsValido("direccion")),e.xp6(6),e.Q6J("ngIf",r.campoEsValido("usuario")),e.xp6(5),e.Q6J("ngIf",r.campoEsValido("password")),e.xp6(6),e.Q6J("ngIf",r.campoEsValido("passwordRepet")),e.xp6(5),e.Q6J("ngIf",r.campoEsValido("tipoUsuario")),e.xp6(11),e.Q6J("disabled",r.formul.pending))},directives:[i._Y,i.JL,i.sg,p.O5,i.Fj,i.JJ,i.u,i.Q7,i.EJ,i.YN,i.Kr],styles:['.form-control[_ngcontent-%COMP%]{border:1px solid #ccc;display:block;width:100%;height:40px;padding:0 20px;border-radius:20px;font-family:"Muli-Bold";background:none}select[_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;cursor:pointer;border-radius:20px;padding-left:20px}select[_ngcontent-%COMP%]   option[value=""][disabled][_ngcontent-%COMP%]{display:none;color:#000}.formSpam[_ngcontent-%COMP%]{font-size:13px;display:block}.formReg[_ngcontent-%COMP%]{margin-bottom:0}select#inputState[_ngcontent-%COMP%]{color:#000}.select--no-search[_ngcontent-%COMP%]   .select2-search[_ngcontent-%COMP%]{display:none!important}.rs-select2[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%]{width:100%!important;outline:none;background:#fafafa;box-shadow:inset 0 1px 3px #00000014;border-radius:5px}.rs-select2[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]{outline:none;border:none;height:50px;background:transparent}.rs-select2[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]{line-height:50px;color:#555;font-size:16px;font-family:inherit;padding-left:22px;padding-right:50px}.rs-select2[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%]{height:50px;right:20px;display:flex;justify-content:center;align-items:center}.rs-select2[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:none}.rs-select2[_ngcontent-%COMP%]   .select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%]:after{font-family:"Material-Design-Iconic-Font";content:"\\f2f9";font-size:24px;color:#999;transition:all .4s ease}.rs-select2[_ngcontent-%COMP%]   .select2-container.select2-container--open[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%]:after{transform:rotate(-180deg)}.select2-container--open[_ngcontent-%COMP%]   .select2-dropdown--below[_ngcontent-%COMP%]{border:none;border-radius:3px;box-shadow:0 8px 20px #00000026;border:1px solid #e0e0e0;margin-top:5px;overflow:hidden}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]{padding-left:22px}.form-group[_ngcontent-%COMP%]{margin-bottom:.5rem}button[_ngcontent-%COMP%]{background:#57b846}@media (min-width: 992px){.wrap-login100[_ngcontent-%COMP%]{padding:50px 40px 33px}}@media (max-width: 992px){.wrap-login100[_ngcontent-%COMP%]{padding:50px 40px 33px}}@media (max-width: 768px){.wrap-login100[_ngcontent-%COMP%]{padding:30px 80px 33px}form[_ngcontent-%COMP%]{width:100%;padding-right:15px;padding-left:15px}}@media (max-width: 576px){.wrap-login100[_ngcontent-%COMP%]{padding:30px 40px 33px}}@media (max-width: 400px){.wrap-login100[_ngcontent-%COMP%]{padding:30px 15px 33px}}@media (max-width: 320px){.wrap-login100[_ngcontent-%COMP%]{padding:30px 15px 33px}}']}),t})()},{path:"verificarEmail",component:b},{path:"recuperarPass",component:(()=>{class t{constructor(o,r,n,u){this.fb=o,this.auth=r,this.vs=n,this.router=u,this.ValidarCam()}ngOnInit(){}ValidarCam(){this.formulRes=this.fb.group({email:[,[i.kI.required,i.kI.pattern(this.vs.emailPatt)]]})}reestablecer(){s().fire({icon:"info",allowOutsideClick:!1,text:"Espere por favor..."}),s().showLoading();const{email:o}=this.formulRes.value;this.auth.RestPassword(o).subscribe(r=>{s().fire({showConfirmButton:!1,focusConfirm:!1,icon:"success",text:"Correo Enviado...",timer:1e3}),this.router.navigateByUrl("auth/login")},r=>{console.log(r),s().fire({icon:"error",title:"Error!",text:"Error al Enviar el correo"})})}campoEsValido(o){return this.formulRes.controls[o].errors&&this.formulRes.controls[o].touched}get emailErrorMsg(){var o;const r=null===(o=this.formulRes.get("email"))||void 0===o?void 0:o.errors;return(null==r?void 0:r.required)?"Correo Electronico obligatorio.":(null==r?void 0:r.pattern)?"Formato de Correo Incorrecto.":""}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(i.qu),e.Y36(g.e),e.Y36(_.o),e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-cambiar-pass"]],decls:22,vars:2,consts:[[1,"limiter"],[1,"container-login100"],[1,"wrap-login100"],[1,"login100-form","validate-form",3,"formGroup","ngSubmit"],[1,"login100-form-title"],["class","text-danger formSpam",4,"ngIf"],["data-validate","Valid email is required: ex@abc.xyz",1,"wrap-input100","validate-input"],["type","text","formControlName","email","name","email","placeholder","Correo Electronico",1,"input100"],[1,"focus-input100"],[1,"symbol-input100"],["aria-hidden","true",1,"fas","fa-user"],[1,"container-login100-form-btn"],[1,"login100-form-btn","btn-primary"],[1,"text-center","p-t-12"],[1,"txt1"],["href","/auth/login",1,"txt2"],[1,"text-danger","formSpam"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"form",3),e.NdJ("ngSubmit",function(){return r.reestablecer()}),e.TgZ(4,"span",4),e._uU(5," Has olvidado tu contrase\xf1a? "),e.qZA(),e.TgZ(6,"p"),e._uU(7,"Ingresa tu Correo electr\xf3nico y te enviaremos un enlace para restablecer tu contrase\xf1a"),e.qZA(),e.YNc(8,F,2,1,"span",5),e.TgZ(9,"div",6),e._UZ(10,"input",7),e._UZ(11,"span",8),e.TgZ(12,"span",9),e._UZ(13,"i",10),e.qZA(),e.qZA(),e.TgZ(14,"div",11),e.TgZ(15,"button",12),e._uU(16," Reestablecer "),e.qZA(),e.qZA(),e.TgZ(17,"div",13),e.TgZ(18,"span",14),e._uU(19," Regresar al "),e.qZA(),e.TgZ(20,"a",15),e._uU(21," login? "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(3),e.Q6J("formGroup",r.formulRes),e.xp6(5),e.Q6J("ngIf",r.campoEsValido("email")))},directives:[i._Y,i.JL,i.sg,p.O5,i.Fj,i.JJ,i.u],styles:["button[_ngcontent-%COMP%]{background:#57b846}.container-login100[_ngcontent-%COMP%]{width:100%;min-height:70vh}p[_ngcontent-%COMP%]{text-align:justify}"]}),t})()},{path:"**",redirectTo:"login"}]}];let Y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(N)],c.Bz]}),t})(),D=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.ez,i.UX,Y]]}),t})()}}]);