"use strict";(self.webpackChunkhelpr_front=self.webpackChunkhelpr_front||[]).push([[999],{5999:(Te,A,l)=>{l.r(A),l.d(A,{TecnicosModule:()=>ge});var g=l(9808),_=l(1083),c=l(3075),T=l(2134),e=l(5e3),h=l(3038),Z=l(6850),q=l(7446),u=l(7322),N=l(7531),C=l(5245),U=l(1470),v=l(7423);function I(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function b(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function y(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Formato de CPF inv\xe1lido"),e.qZA())}function Y(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function J(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function Q(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"O m\xednimo s\xe3o 8 caracteres"),e.qZA())}function E(t,r){1&t&&(e.TgZ(0,"span",15),e._uU(1," Marque pelo menos uma fun\xe7\xe3o para o user "),e.qZA())}let S=(()=>{class t{constructor(o,n,i,a){this.fb=o,this.tecnicosService=n,this.toast=i,this.router=a,this.tecnicoForm=this.fb.group({nome:[null,[c.kI.required]],cpf:[null,[c.kI.required,c.kI.maxLength(14)]],email:[null,[c.kI.required,c.kI.email]],senha:[null,[c.kI.required]],perfils:this.fb.array([[!1],[!1],[!0]],[T.mK])})}onSubmit(){const o=Object.assign(Object.assign({},this.tecnicoForm.value),{perfils:(0,T.Fi)(this.tecnicoForm.value.perfils)}),n=this.toast.loading("Adicionando tecnico");this.tecnicosService.create(o).subscribe({next:()=>{n.close(),this.toast.success("Tecnico criado"),this.router.navigate(["tecnicos"])},error:i=>{var a;switch(n.close(),i.status){case 403:return this.toast.error("A\xe7\xe3o n\xe3o permitida");case 409:return this.toast.error(i.error.message);default:return this.toast.error(`Um erro aconteceu: ${null!==(a=i.error.message)&&void 0!==a?a:""}`)}}})}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.qu),e.Y36(h.y),e.Y36(Z.jE),e.Y36(_.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tecnico-create"]],decls:44,vars:10,consts:[[1,"form-wrapper"],[3,"formGroup","ngSubmit"],["formArrayName","perfils",1,"section"],["color","primary","formControlName","0",1,"margin"],["color","primary","formControlName","1",1,"margin"],["color","primary","formControlName","2",1,"margin"],["appearance","fill"],["matInput","","placeholder","Nome do tecnico","formControlName","nome","required",""],[4,"ngIf"],["matPrefix",""],["matInput","","mask","000.000.000-00","placeholder","CPF do tecnico","formControlName","cpf","required","",3,"dropSpecialCharacters"],["matInput","","placeholder","Email do tecnico","formControlName","email","type","email","required",""],["matInput","","placeholder","Senha do tecnico","formControlName","senha","type","password","required",""],["class","mat-error",4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled"],[1,"mat-error"]],template:function(o,n){if(1&o&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(2,"h2"),e._uU(3,"Novo tecnico"),e.qZA(),e.TgZ(4,"section",2)(5,"mat-checkbox",3),e._uU(6,"Admin"),e.qZA(),e.TgZ(7,"mat-checkbox",4),e._uU(8,"Cliente"),e.qZA(),e.TgZ(9,"mat-checkbox",5),e._uU(10,"Tecnico"),e.qZA()(),e.TgZ(11,"mat-form-field",6)(12,"mat-label"),e._uU(13,"Nome"),e.qZA(),e._UZ(14,"input",7),e.YNc(15,I,2,0,"mat-error",8),e.TgZ(16,"mat-icon",9),e._uU(17,"person"),e.qZA()(),e.TgZ(18,"mat-form-field",6)(19,"mat-label"),e._uU(20,"CPF"),e.qZA(),e._UZ(21,"input",10),e.YNc(22,b,2,0,"mat-error",8),e.YNc(23,y,2,0,"mat-error",8),e.TgZ(24,"mat-icon",9),e._uU(25,"credit_card"),e.qZA()(),e.TgZ(26,"mat-form-field",6)(27,"mat-label"),e._uU(28,"Email"),e.qZA(),e._UZ(29,"input",11),e.YNc(30,Y,2,0,"mat-error",8),e.TgZ(31,"mat-icon",9),e._uU(32,"email"),e.qZA()(),e.TgZ(33,"mat-form-field",6)(34,"mat-label"),e._uU(35,"Senha"),e.qZA(),e._UZ(36,"input",12),e.YNc(37,J,2,0,"mat-error",8),e.YNc(38,Q,2,0,"mat-error",8),e.TgZ(39,"mat-icon",9),e._uU(40,"key"),e.qZA()(),e.YNc(41,E,2,0,"span",13),e.TgZ(42,"button",14),e._uU(43," Criar "),e.qZA()()()),2&o){let i,a,s,p,d,f,x;e.xp6(1),e.Q6J("formGroup",n.tecnicoForm),e.xp6(14),e.Q6J("ngIf",null==(i=n.tecnicoForm.get("nome"))||null==i.errors?null:i.errors.required),e.xp6(6),e.Q6J("dropSpecialCharacters",!1),e.xp6(1),e.Q6J("ngIf",null==(a=n.tecnicoForm.get("cpf"))||null==a.errors?null:a.errors.required),e.xp6(1),e.Q6J("ngIf",null==(s=n.tecnicoForm.get("cpf"))||null==s.errors?null:s.errors.mask),e.xp6(7),e.Q6J("ngIf",null==(p=n.tecnicoForm.get("email"))||null==p.errors?null:p.errors.required),e.xp6(7),e.Q6J("ngIf",null==(d=n.tecnicoForm.get("senha"))||null==d.errors?null:d.errors.required),e.xp6(1),e.Q6J("ngIf",null==(f=n.tecnicoForm.get("senha"))||null==f.errors?null:f.errors.minlength),e.xp6(3),e.Q6J("ngIf",null==(x=n.tecnicoForm.get("perfils"))||null==x.errors?null:x.errors.sometrue),e.xp6(1),e.Q6J("disabled",n.tecnicoForm.invalid)}},directives:[c._Y,c.JL,c.sg,c.CE,q.oG,c.JJ,c.u,u.KE,u.hX,N.Nt,c.Fj,c.Q7,g.O5,u.TO,C.Hw,u.qo,U.hx,v.lW],styles:[""]}),t})();var F=l(605);function O(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function k(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function D(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Formato de CPF inv\xe1lido"),e.qZA())}function M(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function w(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Campo obrigat\xf3rio"),e.qZA())}function j(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"O m\xednimo s\xe3o 8 caracteres"),e.qZA())}function $(t,r){1&t&&(e.TgZ(0,"span",17),e._uU(1," Marque pelo menos uma fun\xe7\xe3o para o user "),e.qZA())}function B(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"div",2)(1,"form",3),e.NdJ("ngSubmit",function(){return e.CHM(o),e.oxw().onSubmit()}),e.TgZ(2,"h2"),e._uU(3,"Editar tecnico"),e.qZA(),e.TgZ(4,"section",4)(5,"mat-checkbox",5),e._uU(6,"Admin"),e.qZA(),e.TgZ(7,"mat-checkbox",6),e._uU(8,"Cliente"),e.qZA(),e.TgZ(9,"mat-checkbox",7),e._uU(10,"Tecnico"),e.qZA()(),e.TgZ(11,"mat-form-field",8)(12,"mat-label"),e._uU(13,"Nome"),e.qZA(),e._UZ(14,"input",9),e.YNc(15,O,2,0,"mat-error",10),e.TgZ(16,"mat-icon",11),e._uU(17,"person"),e.qZA()(),e.TgZ(18,"mat-form-field",8)(19,"mat-label"),e._uU(20,"CPF"),e.qZA(),e._UZ(21,"input",12),e.YNc(22,k,2,0,"mat-error",10),e.YNc(23,D,2,0,"mat-error",10),e.TgZ(24,"mat-icon",11),e._uU(25,"credit_card"),e.qZA()(),e.TgZ(26,"mat-form-field",8)(27,"mat-label"),e._uU(28,"Email"),e.qZA(),e._UZ(29,"input",13),e.YNc(30,M,2,0,"mat-error",10),e.TgZ(31,"mat-icon",11),e._uU(32,"email"),e.qZA()(),e.TgZ(33,"mat-form-field",8)(34,"mat-label"),e._uU(35,"Senha"),e.qZA(),e._UZ(36,"input",14),e.YNc(37,w,2,0,"mat-error",10),e.YNc(38,j,2,0,"mat-error",10),e.TgZ(39,"mat-icon",11),e._uU(40,"key"),e.qZA()(),e.YNc(41,$,2,0,"span",15),e.TgZ(42,"button",16),e._uU(43," Salvar "),e.qZA()()()}if(2&t){const o=e.oxw();let n,i,a,s,p,d,f;e.xp6(1),e.Q6J("formGroup",o.tecnicoForm),e.xp6(14),e.Q6J("ngIf",null==(n=o.tecnicoForm.get("nome"))||null==n.errors?null:n.errors.required),e.xp6(6),e.Q6J("dropSpecialCharacters",!1),e.xp6(1),e.Q6J("ngIf",null==(i=o.tecnicoForm.get("cpf"))||null==i.errors?null:i.errors.required),e.xp6(1),e.Q6J("ngIf",null==(a=o.tecnicoForm.get("cpf"))||null==a.errors?null:a.errors.mask),e.xp6(7),e.Q6J("ngIf",null==(s=o.tecnicoForm.get("email"))||null==s.errors?null:s.errors.required),e.xp6(7),e.Q6J("ngIf",null==(p=o.tecnicoForm.get("senha"))||null==p.errors?null:p.errors.required),e.xp6(1),e.Q6J("ngIf",null==(d=o.tecnicoForm.get("senha"))||null==d.errors?null:d.errors.minlength),e.xp6(3),e.Q6J("ngIf",null==(f=o.tecnicoForm.get("perfils"))||null==f.errors?null:f.errors.sometrue),e.xp6(1),e.Q6J("disabled",o.tecnicoForm.invalid)}}function z(t,r){1&t&&e._UZ(0,"app-loader",19)}function R(t,r){if(1&t&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&t){const o=e.oxw(2);e.xp6(1),e.Oqu(o.errorMsg)}}function L(t,r){if(1&t&&(e.YNc(0,z,1,0,"app-loader",18),e.YNc(1,R,2,1,"p",10)),2&t){const o=e.oxw();e.Q6J("ngIf",o.loading),e.xp6(1),e.Q6J("ngIf",o.error)}}let P=(()=>{class t{constructor(o,n,i,a,s){this.route=o,this.tecnicosService=n,this.fb=i,this.toast=a,this.router=s,this.errorMsg="",this.error=!1,this.loading=!0,this.tecnicoForm=this.fb.group({id:[null],nome:[null,[c.kI.required]],cpf:[null,[c.kI.required,c.kI.maxLength(14)]],email:[null,[c.kI.required,c.kI.email]],senha:[null],perfils:this.fb.array([[!1],[!1],[!1]],[T.mK])})}onSubmit(){const o=Object.assign(Object.assign({},this.tecnicoForm.value),{perfils:(0,T.Fi)(this.tecnicoForm.value.perfils)}),n=this.toast.loading("Atualizando tecnico");this.tecnicosService.update(o).subscribe({next:()=>{n.close(),this.toast.success("Tecnico atualizado"),this.router.navigate(["tecnicos"])},error:i=>{var a;switch(n.close(),i.status){case 403:return this.toast.error("A\xe7\xe3o n\xe3o permitida");case 409:return this.toast.error(i.error.message);default:return this.toast.error(`Um erro aconteceu: ${null!==(a=i.error.message)&&void 0!==a?a:""}`)}}})}ngOnInit(){this.tecnicosService.findById(this.route.snapshot.params.id).subscribe({next:n=>{var i;n.senha="";const a=(0,T.MD)(n.perfils);this.tecnicoForm.patchValue(n),null===(i=this.tecnicoForm.get("perfils"))||void 0===i||i.setValue(a),this.loading=!1},error:n=>{this.errorMsg=n.error.message,this.errorMsg||(this.errorMsg="Um erro aconteceu"),this.error=!0,this.loading=!1}})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(_.gz),e.Y36(h.y),e.Y36(c.qu),e.Y36(Z.jE),e.Y36(_.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tecnico-update"]],decls:3,vars:2,consts:[["class","form-wrapper",4,"ngIf","ngIfElse"],["loadingOrError",""],[1,"form-wrapper"],[3,"formGroup","ngSubmit"],["formArrayName","perfils",1,"section"],["color","primary","formControlName","0",1,"margin"],["color","primary","formControlName","1",1,"margin"],["color","primary","formControlName","2",1,"margin"],["appearance","fill"],["matInput","","placeholder","Nome do tecnico","formControlName","nome","required",""],[4,"ngIf"],["matPrefix",""],["matInput","","mask","000.000.000-00","placeholder","CPF do tecnico","formControlName","cpf","required","",3,"dropSpecialCharacters"],["matInput","","placeholder","Email do tecnico","formControlName","email","type","email","required",""],["matInput","","placeholder","Senha do tecnico","formControlName","senha","type","password"],["class","mat-error",4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled"],[1,"mat-error"],["label","Carregando registro de tecnico...",4,"ngIf"],["label","Carregando registro de tecnico..."]],template:function(o,n){if(1&o&&(e.YNc(0,B,44,10,"div",0),e.YNc(1,L,2,2,"ng-template",null,1,e.W1O)),2&o){const i=e.MAs(2);e.Q6J("ngIf",!n.loading&&!n.error)("ngIfElse",i)}},directives:[g.O5,c._Y,c.JL,c.sg,c.CE,q.oG,c.JJ,c.u,u.KE,u.hX,N.Nt,c.Fj,c.Q7,u.TO,C.Hw,u.qo,U.hx,v.lW,F.R],styles:[""]}),t})();var G=l(515),m=l(8279),H=l(7238);function X(t,r){1&t&&(e.TgZ(0,"th",16),e._uU(1,"#"),e.qZA())}function K(t,r){if(1&t&&(e.TgZ(0,"td",17),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.Oqu(o.id)}}function W(t,r){1&t&&(e.TgZ(0,"th",16),e._uU(1,"Nome"),e.qZA())}function V(t,r){if(1&t&&(e.TgZ(0,"td",17),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.Oqu(o.nome)}}function ee(t,r){1&t&&(e.TgZ(0,"th",16),e._uU(1,"Email"),e.qZA())}function te(t,r){if(1&t&&(e.TgZ(0,"td",17),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.Oqu(o.email)}}function oe(t,r){1&t&&(e.TgZ(0,"th",16),e._uU(1,"CPF"),e.qZA())}function re(t,r){if(1&t&&(e.TgZ(0,"td",17),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.Oqu(o.cpf)}}function ne(t,r){1&t&&(e.TgZ(0,"th",16),e._uU(1,"Criado em"),e.qZA())}function ie(t,r){if(1&t&&(e.TgZ(0,"td",17),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.hij(" ",o.dataCriacao," ")}}function ce(t,r){1&t&&(e.TgZ(0,"th",16),e._uU(1,"A\xe7\xf5es"),e.qZA())}function ae(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"td",17)(1,"a",18)(2,"mat-icon"),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"a",19),e.NdJ("click",function(){const a=e.CHM(o).$implicit;return e.oxw(2).delete(a.id)}),e.TgZ(5,"mat-icon"),e._uU(6,"delete"),e.qZA()()()}if(2&t){const o=r.$implicit;e.xp6(1),e.MGl("routerLink","edit/",o.id,"")}}function le(t,r){1&t&&e._UZ(0,"tr",20)}function me(t,r){1&t&&e._UZ(0,"tr",21)}function se(t,r){if(1&t&&(e.TgZ(0,"div",2)(1,"h2"),e._uU(2,"Lista de t\xe9cnicos"),e.qZA(),e.TgZ(3,"a",3)(4,"mat-icon"),e._uU(5,"add"),e.qZA(),e._uU(6," Novo t\xe9cnico "),e.qZA(),e.TgZ(7,"div",4)(8,"table",5),e.ynx(9,6),e.YNc(10,X,2,0,"th",7),e.YNc(11,K,2,1,"td",8),e.BQk(),e.ynx(12,9),e.YNc(13,W,2,0,"th",7),e.YNc(14,V,2,1,"td",8),e.BQk(),e.ynx(15,10),e.YNc(16,ee,2,0,"th",7),e.YNc(17,te,2,1,"td",8),e.BQk(),e.ynx(18,11),e.YNc(19,oe,2,0,"th",7),e.YNc(20,re,2,1,"td",8),e.BQk(),e.ynx(21,12),e.YNc(22,ne,2,0,"th",7),e.YNc(23,ie,2,1,"td",8),e.BQk(),e.ynx(24,13),e.YNc(25,ce,2,0,"th",7),e.YNc(26,ae,7,1,"td",8),e.BQk(),e.YNc(27,le,1,0,"tr",14),e.YNc(28,me,1,0,"tr",15),e.qZA()()()),2&t){const o=r.ngIf,n=e.oxw();e.xp6(8),e.Q6J("dataSource",o),e.xp6(19),e.Q6J("matHeaderRowDef",n.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedColumns)}}function ue(t,r){1&t&&e._UZ(0,"app-loader",22)}const pe=[{path:"",component:(()=>{class t{constructor(o,n){this.tecnicosService=o,this.toast=n,this.displayedColumns=["id","nome","email","cpf","dataCriacao","acoes"],this.tecnicos$=G.E}delete(o){if(confirm("Tem certeza?")){const i=this.toast.loading("Deletando usu\xe1rio");this.tecnicosService.delete(o).subscribe({next:()=>{this.tecnicos$=this.tecnicosService.findAll(),this.toast.success("Usu\xe1rio deletado"),i.close()},error:a=>{switch(i.close(),a.status){case 403:return this.toast.error("Usu\xe1rio n\xe3o tem permiss\xe3o");case 409:return this.toast.error(a.error.message);default:return this.toast.error("Um erro aconteceu")}}})}}ngOnInit(){this.tecnicos$=this.tecnicosService.findAll()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(h.y),e.Y36(Z.jE))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tecnicos"]],decls:4,vars:4,consts:[["class","mat-elevation-z8",4,"ngIf","ngIfElse"],["loading",""],[1,"mat-elevation-z8"],["mat-raised-button","","color","accent","routerLink","new"],[1,"table-wrapper"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nome"],["matColumnDef","email"],["matColumnDef","cpf"],["matColumnDef","dataCriacao"],["matColumnDef","acoes"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","primary","matTooltip","Editar tecnico",3,"routerLink"],["mat-icon-button","","color","warn","matTooltip","Deletar tecnico",3,"click"],["mat-header-row",""],["mat-row",""],["label","Carregando tecnicos..."]],template:function(o,n){if(1&o&&(e.YNc(0,se,29,3,"div",0),e.ALo(1,"async"),e.YNc(2,ue,1,0,"ng-template",null,1,e.W1O)),2&o){const i=e.MAs(3);e.Q6J("ngIf",e.lcZ(1,2,n.tecnicos$))("ngIfElse",i)}},directives:[g.O5,v.zs,_.yS,C.Hw,m.BZ,m.w1,m.fO,m.ge,m.Dz,m.ev,H.gM,m.as,m.XQ,m.nj,m.Gk,F.R],pipes:[g.Ov],styles:[""]}),t})()},{path:"new",component:S},{path:"edit/:id",component:P}];let de=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[_.Bz.forChild(pe)],_.Bz]}),t})();var fe=l(8504),_e=l(4466);let ge=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.ez,de,fe.q,c.UX,_e.m,U.yI.forRoot()]]}),t})()}}]);